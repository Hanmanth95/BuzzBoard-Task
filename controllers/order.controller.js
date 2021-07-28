var Orders = require('../models/order');

exports.getOrderByOrderDate = function(req, res) {
  console.log('getOrderByOrderDate called');
  console.log(req.params);
  Orders.find({ order_date: req.params.date }, function(err, order) {
    if (err) {
      return res.send(err);
    }
    console.log('find response');
    console.log(order);
    if (order && order.length > 0) {
      return res.send(order);
    } else {
      return res.send({ Ack: 'No records found' });
    }
  });
};

exports.getOrderByOrderId = function(req, res) {
  console.log('getOrderByOrderId called');
  console.log(req.params);
  Orders.findOne({ orderId: req.params.orderId }, function(err, order) {
    if (err) {
      return res.send(err);
    }
    console.log('find response');
    console.log(order);
    if (order) {
      return res.send(order);
    } else {
      return res.send({ Ack: 'No records found' });
    }
  });
};

exports.deleteOrderByOrderId = function(req, res) {
  console.log('deleteOrderByOrderId called');
  console.log(req.params);
  Orders.findOneAndDelete({ orderId: req.params.orderId }, function(
    err,
    order
  ) {
    if (err) {
      return res.send(err);
    }
    console.log('deleteOrderByOrderId response');
    console.log(order);
    if (order) {
      return res.send({
        status: 'orderId' + req.params.orderId + 'delete success'
      });
    } else {
      return res.send({ Ack: 'No records found' });
    }
  });
};

exports.updateOrder = function(req, res) {
  console.log('updateOrder called');
  console.log(req.params);
  Orders.findOneAndUpdate(
    { orderId: req.params.orderId },
    { $set: { delivery_date: req.params.deliveryDate } },
    { new: true },
    function(err, order) {
      if (err) {
        return res.send(err);
      }
      console.log('updateOrder response');
      console.log(order);
      if (order) {
        return res.send(order);
      } else {
        return res.send({ Ack: 'No records found' });
      }
    }
  );
};

exports.createOrder = function(req, res) {
  console.log('createOrder called');
  console.log(req.body);
  Orders.findOne({ orderId: req.body.orderId }, function(err, order) {
    if (err) {
      return err;
    }
    console.log('createOrder response@findOne');
    console.log(order);
    if (order) {
      return res.send({ Ack: 'OrderId Already Exsists' });
    }
    var order = new Orders();
    order.orderId = req.body.orderId;
    order.item_name = req.body.item_name;
    order.cost = req.body.cost;
    order.order_date = req.body.order_date;
    order.delivery_date = req.body.delivery_date;
    order.save(function(err, response) {
      console.log('save response');
      console.log(response);
      if (err) {
        return err;
      }
      if (response) {
        return res.send({ status: 'SUCCESS' });
      }
      return res.send(response);
    });
  });
};

exports.getAllOrders = function(req, res) {
  console.log('getAllOrders called');
  Orders.find({}, function(err, result) {
    if (err) {
      return res.send(err);
    }
    return res.send(result);
  });
};

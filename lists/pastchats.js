function(head, req) {
  var messages = [];
  var count = 0;
  while (row = getRow()) {
    if(row.value.channel == req.query.channel) {
      messages.push(row.value);
      count++;
    }
    if(count == req.query.number) {
        break;
    }
  } 
  send(JSON.stringify(messages));
}
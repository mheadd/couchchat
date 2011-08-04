function(doc) {
  emit(null, {name: doc.name, message: doc.message, channel: doc.channel});  
}
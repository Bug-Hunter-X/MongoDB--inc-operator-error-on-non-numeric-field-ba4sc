```javascript
// Correct use of $inc operator in MongoDB update operation
db.collection.updateOne({"_id":1},{$inc:{ "counter": 1}}, {upsert: true});
//Checking if the field exists and is a number before incrementing
db.collection.findOneAndUpdate( { "_id": 1 },
  { $inc: { counter: 1 } },
  { upsert: true, returnOriginal: false }
)
//If the field does not exists, then it will create a new document and set "counter" to 1
.then(result => {
  if (!result.value.counter) {
    db.collection.updateOne({"_id":1},{$set:{"counter":1}});
  }
})
```
let connect = function(){
  if (global.connection){
    return global.connection.connect();
  }

  const { Pool } = require("pg");
  const pool = new Pool({
    connectionString: "postgres://zyblfdkn:8iZDEe3_HUBAljR-a2nyNQup7L3aOX95@kesavan.db.elephantsql.com/zyblfdkn"
  });

  global.connection = pool;
  return pool.connect();
}

module.exports = { connect }
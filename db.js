let connect = function(){
  if (global.connection){
    return global.connection.connect();
  }

  const { Pool } = require("pg");
  const pool = new Pool({
    connectionString: "postgres://yvibtrjb:NCDL7xiJgt6fzWNCeEJowOmp51O-C4yf@kesavan.db.elephantsql.com/yvibtrjb"
  });

  global.connection = pool;
  return pool.connect();
}

module.exports = { connect }
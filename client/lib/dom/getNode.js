function getNode(tag, con = document) {
  if (con.nodeType !== 9) con.getNode(con);

  return con.querySelector(tag);
}

function getNodes(tag, con = document) {
  if (con.nodeType !== 9) con.getNode(con);

  return con.querySelectorAll(tag);
}

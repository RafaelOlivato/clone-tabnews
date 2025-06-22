function status(request, response) {
  response.status(200).json({ chave: "Tudo Ok!" });
}

export default status;

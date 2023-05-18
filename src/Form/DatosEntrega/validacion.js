export const validarDireccion = (direction) => {
  const length = direction.length;
  return length >= 8 ? true : false;
}

export const validarCiudad = (ciudad) => {
  const length = ciudad.length;
  return length >= 8 ? true : false;
}
export const validarEstado = (estado) => {
  const length = estado.length;
  return length >= 8 ? true : false;
}
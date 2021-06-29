interface initData {
  [propName: string]: any;
}
export function isValidKey(
  key: string | number | symbol,
  object: initData
): key is keyof typeof object {
  return key in object;
}

declare module "*.abell" {
  type PropsType = Record<string, string>
  const html: (_props: PropsType) => string
  export default html;
}

export function say(content = '北京') {
  console.log(content)
}


export function run(content = '嗯嗯') {
  console.log(content)
}


export default function moren(){
  console.log('默认导出只能有一个')
}
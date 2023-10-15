
function report(type: string, msg: ReportMsg){
  if(type == null && msg == null) 
    return;

  // @ts-ignore
  var reportData = {
    type,
    time: Date.now(),
    msg
  }

  //post report
}

export type ReportMsg = string | Record<string, any>;
/** 主要消息请放在msg内 */
export function error(msg: ReportMsg) {
  report('error', msg)
}

export function info(msg: ReportMsg) {
  report('info', msg)
}

export function debug(msg: ReportMsg) {
  report('debug', msg)
}

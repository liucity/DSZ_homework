import * as fs from 'fs';
import path from "path";

function getAllFiles(fp: string): string[] {
  const target = fs.statSync(fp);
  if(target.isDirectory()) {
    const children = fs.readdirSync(fp).map(_fp => getAllFiles(path.resolve(fp, _fp)));
    return ([] as string[]).concat(...children);
  } else {
    return [path.resolve(fp)];
  }
}

function getMethod(...paths: string[]){
  for(const methodPath of paths) {
    const isExist = fs.existsSync(methodPath);
    if(isExist){
      try {
        return require(methodPath) as ((...args: any[]) => any | Record<string, any>);
      }
      catch(e){
        return
      }
    }
  }
}

function genApis(baseFolder: string){
  const basePath = path.resolve(baseFolder);
  const allApis = getAllFiles('mock')
    .map(file => {
      const api = file.replace(basePath, '').replace(/\\/g, '\/').replace(/\.(ts|js)$/, '')
      if(api.indexOf('.') > -1 || api === '/index')
        return

      const method = getMethod(file);

      if(!method) 
        return;

      let item = typeof method === 'function' ? {
        response: (req: any) => {
          const { url, body } = req;
          console.log('>>>> ------------------------------------');
          console.log(' request: ', url, body);
          let data = method(req);
    
          console.log('response: ', data);
          console.log('-------------------------------- <<<<');
    
          return data;
        }
      } : method;
      
      if(!item.response)
        return;

      return {
        url: api,
        method: 'post',
        ...item
      };
    })
    .filter(api => api);

  return allApis;
}

const apis = genApis('mock')
export default apis
import { CommonEngine } from '@angular/ssr/node';
import { render } from '@netlify/angular-runtime/common-engine';

const commonEngine = new CommonEngine();

export async function netlifyCommonEngineHandler(request: Request, context: any): Promise<Response> {
  // Aquí puedes definir endpoints de API si es necesario.
  // Por ejemplo:
  // const pathname = new URL(request.url).pathname;
  // if (pathname === '/api/hello') {
  //   return Response.json({ message: 'Hola desde la API' });
  // }

  return await render(commonEngine);
}

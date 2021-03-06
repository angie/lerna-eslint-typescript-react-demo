import { AzureFunction, Context, HttpRequest } from '@azure/functions'
import { getGreeting } from './get-greeting'

const httpTrigger: AzureFunction = async (
  context: Context,
  req: HttpRequest
): Promise<void> => {
  context.log('HTTP trigger function processed a request.')
  const name = req.query.name || (req.body && req.body.name)
  const responseMessage = name
    ? `${getGreeting(
        name
      )}. This HTTP triggered function executed successfully.`
    : 'This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.'

  context.res = {
    // status: 200, /* Defaults to 200 */
    body: responseMessage,
  }
}

export default httpTrigger

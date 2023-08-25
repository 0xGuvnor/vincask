export const messageToSign = (
  address: `0x${string}` | undefined,
  datetime: Date
) => `Signing this message allows Vincask to confirm your ownership of wallet address ${address}, and that you agree to the terms & conditions.

  Time: ${datetime.toLocaleTimeString()} 
  Date: ${datetime.toLocaleDateString()} 
  
  * This is a gasless transaction *`;

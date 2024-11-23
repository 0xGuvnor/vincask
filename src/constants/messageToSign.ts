export const messageToSign = (
  address: `0x${string}` | undefined,
  datetime: Date,
) => `Signing this message allows Vincask to confirm your ownership of wallet address ${address}, and that you agree to the terms & conditions.

  Time: ${datetime.toLocaleTimeString()} 
  Date: ${datetime.toLocaleDateString()} 
  
  * This is a gasless transaction *`;

export const adminMessageToSign = (
  address: `0x${string}` | undefined,
  datetime: Date,
) => `Sign this message to prove you are the owner of an ${address}. 

You will be granted access if it is anadmin wallet.
  
    Time: ${datetime.toLocaleTimeString()} 
    Date: ${datetime.toLocaleDateString()} 
    
    * This is a gasless transaction *`;

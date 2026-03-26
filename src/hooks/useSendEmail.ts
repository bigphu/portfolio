import { useCallback } from "react";

const useSendEmail = (targetEmail: string): CallableFunction=> {
  const sendEmail: CallableFunction = useCallback(
    (subject: string = "", body: string = ""): void => {
      location.href=`mailto:${targetEmail}?subject=${subject}&body=${body}`;
    }, 
    [targetEmail]
  ); 

  return sendEmail;
}

export default useSendEmail;
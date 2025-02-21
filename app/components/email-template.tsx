import * as React from "react";

interface EmailTemplateProps {
  firstName: string;
  lastName: string;
  message: string;
  currentDate: Date;
}
function formatDate(date: Date) {
  const currentDate = new Date(date);
  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1;
  const year = currentDate.getFullYear();
  return `${day}/${month}/${year}`;
}
export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  lastName,
  message,
  currentDate,
}) => (
  <div>
    <h1>
      Hallo, {firstName} {lastName}!
    </h1>
    <p>{message}</p>
    <p>Send on: {formatDate(currentDate)}</p>
  </div>
);

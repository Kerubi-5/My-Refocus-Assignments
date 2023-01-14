let InvoiceList = ["Invoice 008", "Invoice 007", "Invoice 006", "Invoice 005"];

function insertToBottom(n) {
  InvoiceList.push(`Invoice 00${n}`);

  if (n === 1 || n === 0) {
    return 1;
  }

  return insertToBottom(n - 1);
}

function reverseList(n) {
  InvoiceList[n - 1] = `Invoice 00${n}`;
  if (n === InvoiceList.length) return InvoiceList.length;

  reverseList(n + 1);
}

insertToBottom(4);
console.log(InvoiceList.length);
console.log(InvoiceList.join(" "));
reverseList(1);
console.log(InvoiceList.join(" "));

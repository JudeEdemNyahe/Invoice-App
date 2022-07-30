import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
  }

  .invoice, .invoice-mobile, .viewInvoice-top, .viewInvoice-bottom {
    background: ${({ theme }) => theme.invoiceBg};
    color: ${({ theme }) => theme.text};
    box-shadow: ${({ theme }) => theme.boxShadow};
  }

  .filter-text {
    color: ${({ theme }) => theme.text};
  }

  .checkboxes {
    background: ${({ theme }) => theme.invoiceBg};
  }

  .checkbox {
    color: ${({ theme }) => theme.text};
  }

  .section-3 {
    background: ${({ theme }) => theme.totalsSection};
  }

  .amount-due {
    background: ${({ theme }) => theme.amountDue};
  }
  `
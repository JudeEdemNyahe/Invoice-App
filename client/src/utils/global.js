import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

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

  .section-3, .viewInvoice-right-section-mobile {
    background: ${({ theme }) => theme.totalsSection};
  }

  .amount-due {
    background: ${({ theme }) => theme.amountDue};
  }

  .status-draft {
    background-color: rgba(55, 59, 83, 0.2);
    color:${({ theme }) => theme.draftDark};
}
  `
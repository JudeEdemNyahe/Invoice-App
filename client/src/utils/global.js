import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.25s linear;
  }

  .invoice, .invoice-mobile, .viewInvoice-top, .viewInvoice-bottom, .invoice-form {
    background: ${({ theme }) => theme.invoiceBg};
    color: ${({ theme }) => theme.text};
    box-shadow: ${({ theme }) => theme.boxShadow};
  }

  .filter-text, .title, label, .item-head div h4,
   .delete-buttons button, .delete-description, #cancel
    {
    color: ${({ theme }) => theme.text};
  }

  .checkboxes, .delete-invoice, .btns-container {
    background: ${({ theme }) => theme.invoiceBg};
  }

  .checkbox, .add-item h4, #saveDraft, #save-changes, .addItem {
    color: ${({ theme }) => theme.text};
  }
 
  .section-3, .viewInvoice-right-section-mobile, input, 
  .addItem, select, .delete-buttons .editBtn, #cancel {
    background: ${({ theme }) => theme.totalsSection};
  }

  .amount-due {
    background: ${({ theme }) => theme.amountDue};
  }

  .status-draft {
    background-color: rgba(55, 59, 83, 0.2);
    color:${({ theme }) => theme.draftDark};
}

  .invoice-form {
    background: ${({ theme }) => theme.body}
  }

  input, select, #date {
    border: ${({ theme }) => theme.border};
    color: ${({ theme }) => theme.text};
  }

  #cancel:hover, .addItem:hover {
    background: ${({ theme }) => theme.invoiceBg};
  }

  @media (min-width: 600px) {
    .btns-container {
      background: ${({ theme }) => theme.body}
  }
    } 
  `;

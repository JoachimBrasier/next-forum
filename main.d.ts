import '@auth/core/jwt';
import '@tanstack/react-table';

declare module '@tanstack/react-table' {
  interface ColumnMeta<TData extends RowData, TValue> {
    filterVariant?: 'text' | 'range' | 'select';
    style: {
      align?: 'left' | 'center' | 'right';
    };
  }
}

declare module '@auth/core/jwt' {
  interface JWT {
    id?: string;
  }
}

'use client';

import { AntdRegistry } from '@ant-design/nextjs-registry';
import { ConfigProvider } from 'antd';
import locale from 'antd/locale/ru_RU';
import 'dayjs/locale/ru.js';
import { Provider } from 'react-redux';
import { ChakraProvider } from '@chakra-ui/react';
import { store } from '@store/store';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <AntdRegistry>
        <ConfigProvider locale={locale}>
          <ChakraProvider>{children}</ChakraProvider>
        </ConfigProvider>
      </AntdRegistry>
    </Provider>
  );
}

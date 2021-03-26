import { NativeScriptConfig } from '@nativescript/core';

export default {
  id: 'br.com.ccsdigitaltools.warehouse',
  appPath: 'src',
  appResourcesPath: 'App_Resources',
  android: {
    v8Flags: '--expose_gc',
    markingMode: 'none'
  }
} as NativeScriptConfig;

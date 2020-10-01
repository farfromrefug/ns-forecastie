import { Application } from '@akylas/nativescript';
import Theme from '@nativescript-community/css-theme';
import { Screen } from '@nativescript/core/platform';
import { ad } from '@nativescript/core/utils/utils';
import CSSLoader from '~/variables.module.scss';
import { theme } from './helpers/theme';

const locals = CSSLoader.locals;
// console.log('loading variables', locals);

export const primaryColor: string = locals.primaryColor;
export const accentColor: string = locals.accentColor;
export const darkColor: string = locals.darkColor;
export const backgroundColor: string = locals.backgroundColor;
export const latoFontFamily: string = locals.latoFontFamily;
export const wiFontFamily: string = locals.wiFontFamily;

export const mdiFontFamily: string = locals.mdiFontFamily;
export const forecastFontFamily: string = locals.forecastFontFamily;
export const actionBarHeight: number = parseFloat(locals.actionBarHeight);
export const statusBarHeight: number = parseFloat(locals.statusBarHeight);
export const actionBarButtonHeight: number = parseFloat(locals.actionBarButtonHeight);
export const screenHeightDips = Screen.mainScreen.heightDIPs;
export const screenWidthDips = Screen.mainScreen.widthDIPs;
export const screenScale = Screen.mainScreen.scale;
export let navigationBarHeight: number = parseFloat(locals.navigationBarHeight);

if (global.isAndroid) {
    const context: android.content.Context = ad.getApplicationContext();
    const hasPermanentMenuKey = android.view.ViewConfiguration.get(context).hasPermanentMenuKey();
    if (hasPermanentMenuKey) {
        navigationBarHeight = 0;
    }
} else {
    navigationBarHeight = 0;
}

export const sunnyColor = '#FFC82F';
export const nightColor = '#845987';
export const scatteredCloudyColor = '#cccccc';
export const cloudyColor = '#929292';
export const rainColor = '#4681C3';
export const snowColor = '#ACE8FF';
export let textColor;
export let borderColor;
export let textLightColor;

export let subtitleColor;
export let iconColor;

export function updateThemeColors(theme: string) {
    try {
        theme = Application.systemAppearance();

    } catch(err) {
        console.error('updateThemeColors', err);

    }
    console.log('updateThemeColors', theme);
    if (theme === 'dark') {
        textColor = '#ffffff';
        textLightColor = '#aaaaaa';
        borderColor = '#55cccccc';
        subtitleColor = '#aaaaaa';
        iconColor = '#aaaaaa';
    } else {
        textColor = '#000000';
        textLightColor = '#444444';
        borderColor = '#55cccccc';
        subtitleColor = '#444444';
        iconColor = '#444444';
    }
}

updateThemeColors(theme);

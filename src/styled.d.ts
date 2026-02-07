import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        colors:{
            utils:string,
            primary:string,
            secondary:string,
            searchbar:string,
            message:string,
            white:string,
            white_transform:string,
            error:string,
        },
        background:{
            library:string,
        },
        fonts:{
            base:string,
            size: string,
        },
        transition: string,
        scale: string,
        filter_brightness: string,
    }
}
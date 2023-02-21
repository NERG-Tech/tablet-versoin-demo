import {RootState} from '../../redux/reducers';
import {Themes} from '../../common/theme';

export const themeTypeSelector = (state: RootState) => state.app.theme;

export const themeSelector = (state: RootState) => Themes[state.app.theme];

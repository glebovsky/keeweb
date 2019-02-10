import { connect } from 'react-redux';
import { SettingsGeneral } from 'components/settings/SettingsGeneral';
import {
    getAllLocales,
    getActiveLocale,
    getAllThemes,
    getActiveTheme,
    getFontSize,
} from 'selectors/settings';
import { setMenuSelection } from 'store/menu/set-menu-selection';
import { updateSettings } from 'logic/settings/update-settings';

const mapStateToProps = state => {
    return {
        locale: state.locale,
        locales: getAllLocales(state),
        activeLocale: getActiveLocale(state),
        themes: getAllThemes(state),
        activeTheme: getActiveTheme(state),
        fontSize: getFontSize(state),
    };
};

const mapDispatchToProps = dispatch => {
    return {
        setLocale({ locale }) {
            if (locale === '...') {
                dispatch(setMenuSelection('settings', 'plugins'));
            } else {
                dispatch(updateSettings({ locale }));
            }
        },
        setTheme({ theme }) {
            dispatch(updateSettings({ theme }));
        },
        setFontSize({ fontSize }) {
            dispatch(updateSettings({ fontSize }));
        },
    };
};

const SettingsGeneralContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SettingsGeneral);

export { SettingsGeneralContainer as SettingsGeneral };
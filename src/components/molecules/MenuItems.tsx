import {useHistory} from "react-router-dom";
import routes from "../../routes/Routes";
import {useTranslation} from "react-i18next";
import {Button} from "@navikt/ds-react";
import {useContext} from "react";
import {AuthorizationContext} from "../../context/AuthorizationContext";

const MenuItems = () => {
    const {t} = useTranslation("translations", {keyPrefix: "menuItems"});
    const {hasAccessToUserPermissionPage} = useContext(AuthorizationContext)
    const history = useHistory();
    return (
        <>
            {routes
                .filter((route) => route.inNavigationMenu)
                .map((route) => (
                    <Button
                        size={"medium"}
                        style={{color: "white"}}
                        variant={"tertiary-neutral"}
                        onClick={() => {
                            history.push(route.path);
                        }}
                        key={route.name}
                    >
                        {t(route.name)}
                    </Button>
                ))}
            {hasAccessToUserPermissionPage &&
                <Button
                    size={"medium"}
                    style={{color: "white"}}
                    variant={"tertiary-neutral"}
                    onClick={() => {
                        history.push('/useraccess');
                    }}
                    key={'useraccess'}
                >
                    {t('useraccess')}
                </Button>
            }
        </>
    );
};
export default MenuItems;

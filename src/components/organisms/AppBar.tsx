import MenuItems from "../molecules/MenuItems";
import {InternalHeader, Button, Dropdown, Spacer, Label} from "@navikt/ds-react";
import { useHistory } from "react-router-dom";
import { LanguageIcon } from '@navikt/aksel-icons';
import {useTranslation} from "react-i18next";
import {changeLanguage} from "i18next";
import { ReactComponent as Logo } from '../../images/fint-by-novari.svg'; // Import the SVG file

export const AppBar = () => {
	const history = useHistory();
	const {t} = useTranslation('translations', {keyPrefix: 'menu'});

	return (
		<InternalHeader style={{ backgroundColor: "#1F4F59" }}>
			<Button
				variant="tertiary-neutral"
				size={"small"}
				onClick={() => {
					history.push("/");
				}}
			>
				<Logo
					style={{ width: 80, height: 60, marginRight: "8px" }}
				/>
			</Button>
			<MenuItems />
			<Spacer/>
			<Dropdown>
				<InternalHeader.Button as={Dropdown.Toggle}>
					<LanguageIcon aria-hidden />
					<Label>{t('language')}</Label>
				</InternalHeader.Button>
				<Dropdown.Menu>
					<Dropdown.Menu.GroupedList>
						<Dropdown.Menu.GroupedList.Item onClick={() => changeLanguage("no")}>
							{t('norwegian')}
						</Dropdown.Menu.GroupedList.Item>
						<Dropdown.Menu.GroupedList.Item onClick={() => changeLanguage("nn")}>
							{t('norwegianNN')}
						</Dropdown.Menu.GroupedList.Item>
						<Dropdown.Menu.GroupedList.Item onClick={() => changeLanguage("en")}>
							{t('english')}
						</Dropdown.Menu.GroupedList.Item>
					</Dropdown.Menu.GroupedList>
				</Dropdown.Menu>
			</Dropdown>
		</InternalHeader>
	);
};

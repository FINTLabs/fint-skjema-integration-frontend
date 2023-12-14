import MenuItems from "../molecules/MenuItems";
import {InternalHeader, Button, Dropdown, Spacer} from "@navikt/ds-react";
import { useHistory } from "react-router-dom";
import { CogIcon } from '@navikt/aksel-icons';
import { LanguageIcon } from '@navikt/aksel-icons';
import {useTranslation} from "react-i18next";
import {changeLanguage} from "i18next";

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
				icon={
					<img
						src="https://cdn.flais.io/media/fint-by-vigo-white.svg"
						alt="logo"
						style={{ width: 80, marginRight: "32px", marginBottom: "8px" }}
					/>
				}
			/>
			<MenuItems />
			<Spacer/>
			<Dropdown>
				<InternalHeader.Button as={Dropdown.Toggle}>
					<CogIcon
						style={{ fontSize: "1.5rem" }}
						title="Meny"
					/>
				</InternalHeader.Button>

				<Dropdown.Menu>
					<Dropdown.Menu.GroupedList>
						<Dropdown.Menu.GroupedList.Heading>
							{t('language')} <LanguageIcon aria-hidden />
						</Dropdown.Menu.GroupedList.Heading>
						<Dropdown.Menu.GroupedList.Item onClick={() => changeLanguage("no")}>
							{t('norwegian')}
						</Dropdown.Menu.GroupedList.Item>
						<Dropdown.Menu.GroupedList.Item onClick={() => changeLanguage("nn")}>
							{t('norwegianNN')}
						</Dropdown.Menu.GroupedList.Item>
						<Dropdown.Menu.GroupedList.Item disabled onClick={() => changeLanguage("en")}>
							{t('english')}
						</Dropdown.Menu.GroupedList.Item>
					</Dropdown.Menu.GroupedList>
				</Dropdown.Menu>
			</Dropdown>
		</InternalHeader>
	);
};

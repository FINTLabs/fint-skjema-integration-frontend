import IRoute from "./Route";
import Dashboard from "../features/dashboard/Dashboard";
import IntegrationOverview from "../features/integrationOverview/IntegrationOverview";
import IntegrationForm from "../features/integration/IntegrationForm";
import ConfigurationForm from "../features/configuration/ConfigurationForm";
import UserGuide from "../features/support/components/UserGuide";
import Version from "../components/pages/Version";
import ValueConverting from "../components/pages/ValueConverting";
import Support from "../components/pages/Support";
import Instances from "../components/pages/Instances";
const routes: IRoute[] = [
	{
		path: "/",
		name: "dashboard",
		component: Dashboard,
		exact: true,
		inNavigationMenu: true,
	},
	{
		path: "/integration/new",
		name: "integration",
		component: IntegrationForm,
		exact: true,

		inNavigationMenu: true,
	},
	{
		path: "/integration/configuration/new-configuration",
		name: "integration",
		component: ConfigurationForm,
		exact: true,
	},
	{
		path: "/integration/configuration/edit",
		name: "editIntegration",
		component: ConfigurationForm,
		exact: true,
	},
	{
		path: "configuration/new-configuration",
		name: "editIntegration",
		component: ConfigurationForm,
		exact: true,
	},
	{
		path: "/integration/list",
		name: "integrationOverview",
		component: IntegrationOverview,
		exact: true,
		inNavigationMenu: true,
	},
	{
		path: "/integration/panel",
		name: "integrationPanel",
		component: IntegrationOverview,
		exact: true,
	},
	{
		path: "/integration/instance/list",
		name: "instances",
		component: Instances,
		exact: true,
		inNavigationMenu: true,
	},
	{
		path: "/instance/",
		name: "instancePanel",
		component: Instances,
		exact: true,
	},
	{
		path: "/valueconverting",
		name: "valueConverting",
		component: ValueConverting,
		exact: true,
		inNavigationMenu: true,
	},
	{
		path: "/support",
		name: "support",
		component: Support,
		exact: true,
		inNavigationMenu: true,
	},
	{
		path: "/version",
		name: "version",
		component: Version,
		exact: true,
		inNavigationMenu: true,
	},
	{
		path: "/support/guide",
		name: "guide",
		component: UserGuide,
		exact: true,
		inNavigationMenu: false,
	},
];

export default routes;

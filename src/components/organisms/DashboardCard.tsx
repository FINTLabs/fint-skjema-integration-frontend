import * as React from "react";
import { ILink } from "../../features/dashboard/Link";
import { Box, Heading, BodyLong, Link } from "@navikt/ds-react";
import { Link as RouterLink } from "react-router-dom";

type Props = {
	content: string;
	value: string;
	links?: ILink[];
	id: string;
};

const DashboardCard: React.FunctionComponent<Props> = (props: Props) => {
	return (
		<Box
			id={"support-information"}
			background={"surface-default"}
			align={"center"}
			padding="6"
			borderRadius={"large"}
			borderWidth="2"
			borderColor={"border-subtle"}
		>
			<Heading size="medium"> {props.value}</Heading>
			<Heading size="small">{props.content}</Heading>
			{props.links &&
				props.links.map((link: ILink, index: number) => (
					<BodyLong key={index} id={props.id + `-btn-` + index}>
						<Link as={RouterLink} to={link.href}>
							{link.name}
						</Link>
					</BodyLong>
				))}
		</Box>
	);
};

export default DashboardCard;

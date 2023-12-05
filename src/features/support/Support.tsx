import React from "react";
import { RouteComponent } from "../../routes/Route";
import { Link as RouterLink } from "react-router-dom";
import { FAQ, FLYT_DESCRIPTION } from "./util/supportTexts";
import {
	BodyLong,
	Box,
	ExpansionCard,
	Heading,
	Link,
	List,
	VStack,
} from "@navikt/ds-react";
import InformationTemplate from "../../components/templates/InformationTemplate";
import { Contact } from "../../components/atoms/Contact";

const Support: RouteComponent = () => {
	return (
		<InformationTemplate id={"support"} keyPrefix={"pages.support"}>
			<Box
				id={"support-information"}
				background={"surface-default"}
				padding="6"
				borderRadius={"large"}
				borderWidth="2"
				borderColor={"border-subtle"}
			>
				<VStack gap={"6"}>
					<Heading size={"small"}>Hva er FINT Flyt?</Heading>
					<BodyLong>{FLYT_DESCRIPTION}</BodyLong>
					<BodyLong>
						Du kan se en brukerveiledning til hvordan du bruker Fint Flyt{" "}
						<Link
							as={RouterLink}
							id={"support-guide-link"}
							to={"/support/guide"}
						>
							her
						</Link>
					</BodyLong>
				</VStack>
			</Box>
			<Box id={"support-faq"}>
				<ExpansionCard aria-label="default">
					<ExpansionCard.Header id={"support-faq-header"}>
						<ExpansionCard.Title>Ofte stilte spørsmål</ExpansionCard.Title>
					</ExpansionCard.Header>
					<ExpansionCard.Content>
						<List as="ul" id={"faq-list"}>
							{FAQ.map((item, index) => {
								return (
									<List.Item key={index} title={item.header}>
										{item.content}
									</List.Item>
								);
							})}
						</List>
					</ExpansionCard.Content>
				</ExpansionCard>
			</Box>
			<Contact />
		</InformationTemplate>
	);
};

export default Support;

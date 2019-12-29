import React from "react"
import SlideEffect from "react-reveal/Slide"

import { Title, Content, Description, Background } from "./styles"

import WiredInfo from "../../components/WiredInfo"
import Screen from "../../components/Screen"

import beachBlackBackground from "../../assets/backgrounds/beach_black.jpg"

const Introduction = () => {
	return (
		<Screen color="secondary">
			<Background image={beachBlackBackground}>
				<Content>
					<SlideEffect bottom cascade>
						<Title>
							Hello, I'm <b>Guilherme Bromonschenkel</b>.
						</Title>
						<Description>
							A <b>software developer</b> passionate about programming, software architecture, complex systems and technologies in general. 
						</Description>
					</SlideEffect>
				</Content>
				<WiredInfo 
					info="scroll down to discover more"
					position="bottom"
				/>
			</Background>
		</Screen>
	)
}

export default Introduction

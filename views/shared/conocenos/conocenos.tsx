import React, { Component } from "react";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import UneteSlide from "./slides/slide";
import Dynamic from "@/components/blocks/dynamic/dynamic";

type Props = {
	title: string;
	info: Array<{
		title: string;
		description: string;
		button: string;
		link: string;
	}>;
};

type State = {};

SwiperCore.use([Navigation]);

export default class Conocenos extends Component<Props, State> {
	render() {
		const { title, info } = this.props;
		return (
			<Dynamic classes="w-screen" variant="primary" animate={"showup"}>
				<h2>{title}</h2>
				<Swiper
					slidesPerView={"auto"}
					spaceBetween={30}
					navigation={true}
					className={"swiper-conocenos"}
				>
					<SwiperSlide>
						<UneteSlide
							type="social"
							title="Únete"
							description="A la comunidad"
							button="Ver Enlaces"
							social={{
								whatsapp: "www.whatsapp.com",
								facebook: "www.facebook.com",
								clubhouse: "www.clubhouse.com",
								discord: "www.discord.com",
								twitter: "www.twitter.com",
							}}
							link="/"
						/>
					</SwiperSlide>
					{info.map((i, x) => {
						return (
							<SwiperSlide key={x}>
								<UneteSlide
									title={i.title}
									description={i.description}
									button={i.button}
									link={i.link}
								/>
							</SwiperSlide>
						);
					})}
				</Swiper>
			</Dynamic>
		);
	}
}
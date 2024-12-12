import { View, Text } from "react-native";

import { IconMapPin, IconQrcode, IconTicket } from "@tabler/icons-react-native";

import { s } from "./styles";
import { Step } from "../Step";

export function Steps() {
	return (
		<View style={s.container}>
			<Text style={s.title}>Veja como funciona:</Text>

			<Step
				icon={IconMapPin}
				title="Encontre estabelecimentos"
				description="Veja locais perto de vocÃª que sÃ£o parceiros Nearby"
			/>

			<Step
				icon={IconQrcode}
				title="Ative o cupom com QR Code"
				description="Escaneie o cÃ³digo no estabelecimento para usar o benefÃ­cio"
			/>

			<Step
				icon={IconTicket}
				title="Garanta vantagens perto de vocÃª"
				description="Ative cupons onde estiver, em diferentes tipos de estabelecimento "
			/>
		</View>
	)
}
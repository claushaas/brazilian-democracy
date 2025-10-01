import { Link } from 'expo-router';
import { Text, View } from 'react-native';

export default function Index() {
	return (
		<View
			style={{
				alignItems: 'center',
				flex: 1,
				justifyContent: 'center',
				padding: 24,
			}}
		>
			<Text>Edit app/index.tsx to edit this screen.</Text>

			<Link
				href="/storybook"
				style={{
					backgroundColor: '#007AFF',
					borderRadius: 8,
					marginTop: 16,
					paddingHorizontal: 16,
					paddingVertical: 12,
				}}
			>
				<Text style={{ color: 'white', fontWeight: '600' }}>
					Abrir Storybook
				</Text>
			</Link>
		</View>
	);
}

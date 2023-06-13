import React from 'react';
import { createNewCharacter } from '@/features/character';

const App: React.FC = () => {
	console.log(createNewCharacter());
	return (
		<>
			<div>app</div>
		</>
	);
};

export default App;

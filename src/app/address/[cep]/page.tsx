interface AddressByCepRouteParams {
    cep: string;
}

interface AddressByCepProps {
    params: AddressByCepRouteParams;
}

export default async function AddressByCep({ params }: AddressByCepProps) {
    const cep = params.cep;

    const getAddress = async () => {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        console.log('response: ', response);

        if (!response.ok) {
            throw response.json;
        }
    }

    await getAddress();

    return (
        <div>
            <p>
                Cep: {cep}
            </p>
        </div>
    );
}

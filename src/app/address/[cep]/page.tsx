interface AddressByCepRouteParams {
    cep: string;
}

interface AddressByCepProps {
    params: AddressByCepRouteParams;
}

export default async function AddressByCep({ params }: AddressByCepProps) {

    const cep = params.cep;

    const getAddress = async () => {
        const response = await (await fetch(`https://viacep.com.br/ws/${cep}/json/`)).json();

        return response;
    }

    const address = await getAddress();

    return (
        <div>
            <p>
                Cep: {cep}
            </p>

            <p>
                logradouro: {address.logradouro}
            </p>

            {address.complemento && (
                <p>
                    complemento: {address.complemento}
                </p>
            )}

            <p>
                bairro: {address.bairro}
            </p>

            <p>
                localidade: {address.localidade}
            </p>

            <p>
                uf: {address.uf}
            </p>
        </div>
    );
}

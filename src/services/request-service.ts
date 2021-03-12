import { ApiResponse } from 'models';

export default class RequestService {
    private errorTreatment = <TData>(error: unknown) => {
        console.warn(error);
        return this.formatResponse<TData>(false, undefined, 'Erro desconhecido. Contate o administrador para mais informações.')
    }

    public requestJson = async <IResponse>(endpoint: string): Promise<ApiResponse<IResponse>> => {
        try {
            const response = await fetch(
                endpoint,
                {
                    method: 'GET',
                    body: null,
                    headers: { 'Content-Type': 'application/json' },
                },
            )
            return this.responseTreatment<IResponse>(response);
        } catch (error) {
            return this.errorTreatment(error);
        }
    };

    private formatResponse = <TData>(isOk: boolean, data?: TData, message?: string): ApiResponse<TData> => {
        if (!isOk) {
            return { success: false, error: `${message}` }
        }

        return { success: true, data: data as TData };
    }

    private responseTreatment = async <IResponse>(response: Response): Promise<ApiResponse<IResponse>> => {
        if (!response.ok) {
            if (response.status === 400) return this.formatResponse<IResponse>(false, undefined, 'Houve um erro com a requisição, revise os dados enviados e tente novamente.');
            if (response.status === 401) return this.formatResponse<IResponse>(false, undefined, 'Você não tem permissão para realizar essa operação.');
            if (response.status === 404) return this.formatResponse<IResponse>(false, undefined, 'Não foi possível achar o conteúdo especificado.');

            return this.formatResponse<IResponse>(false, undefined, 'Houve algum erro com a requisição. Tente novamente mais tarde ou contate um administrador');
        }

        const data = await response.json() as IResponse
        return this.formatResponse<IResponse>(true, data)
    }
}

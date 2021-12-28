export interface PersistUsecase<T> {
    perform(data : T): Promise<T | null>
}

export interface FindAllUsecase<T> {
    perform () : Promise<T[]>
}

export interface DeleteUsecase {
    perform (id: number) : Promise<number>
}




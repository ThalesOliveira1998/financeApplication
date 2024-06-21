export default interface IFinanceRepository<Input, Output> {
    save(data: Input): Output;
    update(data: Input): Output;
}
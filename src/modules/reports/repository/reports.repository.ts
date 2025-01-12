import { ReportEntity } from 'src/database/entities/report.entity';
import { EntityRepository, Repository } from 'typeorm';
import { CreateReportDto } from '../dtos/create-report.dto';
import { UpdateReportDto } from '../dtos/update-report.dto';
import { ReportParamsType } from '../types/find-by-params.type';

@EntityRepository(ReportEntity)
export class ReportRepository extends Repository<ReportEntity> {
  async createReport(data: CreateReportDto): Promise<ReportEntity> {
    return this.save(data);
  }

  async findByParams(params: ReportParamsType): Promise<ReportEntity> {
    return this.findOne(params);
  }

  async findAllRepots(): Promise<ReportEntity[]> {
    return this.find();
  }

  async findReportById(id: number): Promise<ReportEntity> {
    return this.findOne(id);
  }

  async updateReport(id: number, data: UpdateReportDto) {
    const user = await this.findOne(id);

    return this.save({
      ...user,
      ...data,
    });
  }

  async deleteReportById(id: number): Promise<object> {
    await this.delete(id);

    return {
      message: 'Deleted Report successfully',
    };
  }
}

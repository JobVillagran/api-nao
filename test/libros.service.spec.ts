import { Test, TestingModule } from '@nestjs/testing';
import { LibrosService } from '../src/libros/libros.service';
import { Libro } from '../src/libros/libro.entity';

describe('LibrosService', () => {
  let librosService: LibrosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LibrosService],
    }).compile();

    librosService = module.get<LibrosService>(LibrosService);
  });

  it('should be defined', () => {
    expect(librosService).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of libros', async () => {
      const result: Libro[] = [/* Create test libro objects */];
      jest.spyOn(librosService, 'findAll').mockResolvedValue(result);

      expect(await librosService.findAll()).toBe(result);
    });
  });

  // Write more tests for other methods in LibrosService
});

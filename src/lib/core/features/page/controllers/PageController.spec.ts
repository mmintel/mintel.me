import { Locale } from '@/lib/core/domain';
import { Page } from '../domain';
import { GetPageUseCase } from '../usecases';
import { GetAllPagesUseCase } from '../usecases/get-all-pages';
import { PageController } from './PageController';

const mockGetPageUseCase: jest.Mocked<GetPageUseCase> = {
  execute: jest.fn(),
};

const mockGetAllPagesUseCase: jest.Mocked<GetAllPagesUseCase> = {
  execute: jest.fn(),
};

const mockPage = new Page({
  id: 'foo',
  components: {
    json: {},
  },
  description: 'foofoo',
  slug: 'foo-bar',
  title: 'fingfong',
});

describe('PageController', () => {
  it('should initialize without crashing', () => {
    expect(
      () => new PageController(mockGetPageUseCase, mockGetAllPagesUseCase),
    ).not.toThrow();
  });

  describe('getPage', () => {
    it('should execute the useCase', async () => {
      expect(mockGetPageUseCase.execute).not.toHaveBeenCalled();
      mockGetPageUseCase.execute.mockResolvedValue(mockPage);

      const controller = new PageController(
        mockGetPageUseCase,
        mockGetAllPagesUseCase,
      );
      await controller.getPage('de-DE', 'foo-bar');

      expect(mockGetPageUseCase.execute).toHaveBeenCalledTimes(1);
      expect(mockGetPageUseCase.execute).toHaveBeenCalledWith({
        locale: Locale.DE,
        slug: 'foo-bar',
      });
    });

    it('transforms domain model to DTO', async () => {
      mockGetPageUseCase.execute.mockResolvedValue(mockPage);

      const controller = new PageController(
        mockGetPageUseCase,
        mockGetAllPagesUseCase,
      );
      const page = await controller.getPage('de-DE', 'foo-bar');

      expect(page).not.toBeInstanceOf(Page);
      expect(page.id).toEqual(mockPage.id);
    });
  });

  describe('getAllPages', () => {
    it('should execute the useCase', async () => {
      expect(mockGetAllPagesUseCase.execute).not.toHaveBeenCalled();
      mockGetAllPagesUseCase.execute.mockResolvedValue([mockPage, mockPage]);

      const controller = new PageController(
        mockGetPageUseCase,
        mockGetAllPagesUseCase,
      );
      await controller.getAllPages();

      expect(mockGetAllPagesUseCase.execute).toHaveBeenCalledTimes(1);
    });

    it('transforms domain model to DTO', async () => {
      mockGetAllPagesUseCase.execute.mockResolvedValue([mockPage, mockPage]);

      const controller = new PageController(
        mockGetPageUseCase,
        mockGetAllPagesUseCase,
      );
      const allPages = await controller.getAllPages();

      allPages.forEach(page => expect(page).not.toBeInstanceOf(Page));
    });
  });
});

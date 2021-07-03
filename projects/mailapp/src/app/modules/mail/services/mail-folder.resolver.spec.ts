import { TestBed } from '@angular/core/testing';

import { MailFolderResolver } from './mail-folder.resolver';

describe('MailFolderResolver', () => {
  let resolver: MailFolderResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(MailFolderResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});

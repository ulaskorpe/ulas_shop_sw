<?php declare(strict_types=1);

namespace SomePlugin\Core\Content\Some;

use Shopware\Core\Framework\DataAbstractionLayer\EntityCollection;

/**
 * @method void add(SomeEntity $entity)
 * @method void set(string $key, SomeEntity $entity)
 * @method SomeEntity[] getIterator()
 * @method SomeEntity[] getElements()
 * @method SomeEntity|null get(string $key)
 * @method SomeEntity|null first()
 * @method SomeEntity|null last()
 */
class SomeCollection extends EntityCollection
{
    protected function getExpectedClass(): string
    {
        return SomeEntity::class;
    }
}

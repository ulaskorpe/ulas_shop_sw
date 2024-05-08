<?php declare(strict_types=1);

namespace SomePlugin\Core\Content\Task;

use Shopware\Core\Framework\DataAbstractionLayer\EntityCollection;

/**
 * @method void add(TaskEntity $entity)
 * @method void set(string $key, TaskEntity $entity)
 * @method TaskEntity[] getIterator()
 * @method TaskEntity[] getElements()
 * @method TaskEntity|null get(string $key)
 * @method TaskEntity|null first()
 * @method TaskEntity|null last()
 */
class TaskCollection extends EntityCollection
{
    protected function getExpectedClass(): string
    {
        return TaskEntity::class;
    }
}
